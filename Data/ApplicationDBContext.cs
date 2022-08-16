using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using HelpingHandNepal.Models;

#nullable disable

namespace HelpingHandNepal.Data
{
    public partial class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext()
        {
        }

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<CampComment> CampComments { get; set; }
        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<EventType> EventTypes { get; set; }
        public virtual DbSet<Fund> Funds { get; set; }
        public virtual DbSet<FundCampaign> FundCampaigns { get; set; }
        public virtual DbSet<FundType> FundTypes { get; set; }
        public virtual DbSet<Newsletter> Newsletters { get; set; }
        public virtual DbSet<Partner> Partners { get; set; }
        public virtual DbSet<PartnershipType> PartnershipTypes { get; set; }
        public virtual DbSet<Sponsor> Sponsors { get; set; }
        public virtual DbSet<SponsorshipType> SponsorshipTypes { get; set; }
        public virtual DbSet<Team> Teams { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UsersProfile> UsersProfiles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-DGH2VBI\\SQLEXPRESS;Initial Catalog=HelpingHandDB;User ID=sa;Password=manager@123");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasIndex(e => e.Name, "UQ__Admins__737584F664AFE79A")
                    .IsUnique();

                entity.Property(e => e.AdRole)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("adRole");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CampComment>(entity =>
            {
                entity.ToTable("CampComment");

                entity.Property(e => e.TextComment).IsRequired();

                entity.HasOne(d => d.Campaign)
                    .WithMany(p => p.CampComments)
                    .HasForeignKey(d => d.CampaignId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CampComme__Campa__54CB950F");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CampComments)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CampComme__UserI__55BFB948");
            });

            modelBuilder.Entity<Event>(entity =>
            {
                entity.HasIndex(e => e.Name, "UQ__Events__737584F6A218E0DC")
                    .IsUnique();

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedTime)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.Details).IsRequired();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Venue)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.EventTypeNavigation)
                    .WithMany(p => p.Events)
                    .HasForeignKey(d => d.EventType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Events__EventTyp__15DA3E5D");

                entity.HasOne(d => d.PartnersNavigation)
                    .WithMany(p => p.Events)
                    .HasForeignKey(d => d.Partners)
                    .HasConstraintName("FK__Events__Partners__16CE6296");

                entity.HasOne(d => d.SponsorsNavigation)
                    .WithMany(p => p.Events)
                    .HasForeignKey(d => d.Sponsors)
                    .HasConstraintName("FK__Events__Sponsors__17C286CF");

                entity.HasOne(d => d.VerifiedByNavigation)
                    .WithMany(p => p.Events)
                    .HasForeignKey(d => d.VerifiedBy)
                    .HasConstraintName("FK__Events__Verified__14E61A24");
            });

            modelBuilder.Entity<EventType>(entity =>
            {
                entity.HasIndex(e => e.Type, "UQ__EventTyp__F9B8A48BB66023EE")
                    .IsUnique();

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Fund>(entity =>
            {
                entity.Property(e => e.IsDelivered).HasColumnName("isDelivered");

                entity.Property(e => e.IsVerified).HasColumnName("isVerified");

                entity.HasOne(d => d.Campaign)
                    .WithMany(p => p.Funds)
                    .HasForeignKey(d => d.CampaignId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Funds__CampaignI__50FB042B");

                entity.HasOne(d => d.Contributor)
                    .WithMany(p => p.Funds)
                    .HasForeignKey(d => d.ContributorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Funds__Contribut__51EF2864");
            });

            modelBuilder.Entity<FundCampaign>(entity =>
            {
                entity.ToTable("FundCampaign");

                entity.HasIndex(e => e.Code, "UQ__FundCamp__A25C5AA7BCE4E016")
                    .IsUnique();

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedTime)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("createdTime");

                entity.Property(e => e.Details)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("title");

                entity.HasOne(d => d.VerifiedByNavigation)
                    .WithMany(p => p.FundCampaigns)
                    .HasForeignKey(d => d.VerifiedBy)
                    .HasConstraintName("FK__FundCampa__Verif__4E1E9780");
            });

            modelBuilder.Entity<FundType>(entity =>
            {
                entity.HasIndex(e => e.Category, "UQ__FundType__F7F53CC24885C872")
                    .IsUnique();

                entity.Property(e => e.Category)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("category");
            });

            modelBuilder.Entity<Newsletter>(entity =>
            {
                entity.ToTable("Newsletter");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Partner>(entity =>
            {
                entity.HasIndex(e => e.Name, "UQ__Partners__737584F6991505B8")
                    .IsUnique();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.PartnerType).HasColumnName("partnerType");

                entity.HasOne(d => d.PartnerTypeNavigation)
                    .WithMany(p => p.Partners)
                    .HasForeignKey(d => d.PartnerType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Partners__partne__29221CFB");
            });

            modelBuilder.Entity<PartnershipType>(entity =>
            {
                entity.ToTable("PartnershipType");

                entity.HasIndex(e => e.Name, "UQ__Partners__737584F698944685")
                    .IsUnique();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Sponsor>(entity =>
            {
                entity.HasIndex(e => e.Name, "UQ__Sponsors__737584F680168722")
                    .IsUnique();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.SponsorTypeNavigation)
                    .WithMany(p => p.Sponsors)
                    .HasForeignKey(d => d.SponsorType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Sponsors__Sponso__22751F6C");
            });

            modelBuilder.Entity<SponsorshipType>(entity =>
            {
                entity.ToTable("SponsorshipType");

                entity.HasIndex(e => e.Name, "UQ__Sponsors__737584F64DE5F04A")
                    .IsUnique();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Offers).IsUnicode(false);
            });

            modelBuilder.Entity<Team>(entity =>
            {
                entity.HasIndex(e => e.Name, "UQ__Teams__737584F661A0944D")
                    .IsUnique();

                entity.HasIndex(e => e.Code, "UQ__Teams__A25C5AA7AD6E5BB9")
                    .IsUnique();

                entity.Property(e => e.About)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Members).IsRequired();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Contact)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Pass)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UserCode)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.UserProfile)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.UserProfileId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Users__UserProfi__625A9A57");
            });

            modelBuilder.Entity<UsersProfile>(entity =>
            {
                entity.ToTable("UsersProfile");

                entity.Property(e => e.Location)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TotalAmount).HasColumnName("totalAmount");

                entity.Property(e => e.TotalDonations).HasColumnName("totalDonations");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserProfileCode)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
