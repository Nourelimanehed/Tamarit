from django.db import models
from django.contrib.auth.models import User,AbstractUser
from django.contrib.auth import get_user_model




class User(AbstractUser):
    USER_ROLE_CHOICES = (
        ('touriste', 'Touriste'),
        ('interface_regional', 'Interface Regional'),
        ('interface_admin_central', 'Interface Admin Central'),
    )

    role = models.CharField(max_length=50, choices=USER_ROLE_CHOICES)
    
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name='myapp_user_set',  
        related_query_name='user'
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='myapp_user_set', 
        related_query_name='user'
    )

    class Meta(AbstractUser.Meta):
        pass
    
User = get_user_model()

class Profile(models.Model):
    USER_ROLE_CHOICES = (
        ('tourist', 'Tourist'),
        ('interface_regional', 'Interface Regional'),
        ('interface_admin_central', 'Interface Admin Central'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nom = models.TextField(max_length=500, blank=True)
    prenom = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=100, blank=True)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True)
    role = models.CharField(max_length=50, choices=USER_ROLE_CHOICES)

    def __str__(self):
        return self.user.username

class Region(models.Model):
    CHOICES = (
        ('east', 'Eastern Region'),
        ('west', 'Western Region'),
        ('north', 'Northern Region'),
        ('south', 'Southern Region'),
    )

    name = models.CharField(max_length=100, choices=CHOICES)
    description = models.TextField()

    def __str__(self):
        return self.get_name_display()


class Site(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    region = models.ForeignKey(Region, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Comment(models.Model):
    site = models.ForeignKey(Site, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments_as_author',default=1)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments_as_user')

    def __str__(self):
        return f"Comment by {self.user.username} on {self.site.name}"

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
