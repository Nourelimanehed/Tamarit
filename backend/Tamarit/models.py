from django.db import models
from django.utils import timezone 
from django.template.defaultfilters import slugify
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles


class Site(models.Model):
    CATEGORY_CHOICES = (
        ('monuments', 'Monuments historiques'),
        ('museums', 'Musées et galeries d\'art'),
        ('nature', 'Sites naturels'),
        ('religious', 'Sites religieux'),
        ('archaeological', 'Sites archéologiques'),
        ('attractions', 'Parcs d\'attractions'),
        ('gardens', 'Jardins et parcs'),
        ('beaches', 'Plages et stations balnéaires'),
        ('historic', 'Villes et quartiers historiques'),
        ('cultural', 'Sites culturels et patrimoniaux'),
    )

    THEME_CHOICES = (
        ('history', 'Histoire et patrimoine culturel'),
        ('nature', 'Nature et paysages'),
        ('art', 'Art et culture'),
        ('outdoor', 'Aventures en plein air'),
        ('spirituality', 'Spiritualité et religion'),
        ('entertainment', 'Divertissement et loisirs'),
        ('gastronomy', 'Gastronomie et cuisine locale'),
    )

    name = models.CharField(max_length=100)
    description = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    theme = models.CharField(max_length=50, choices=THEME_CHOICES)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)

    def __str__(self):
        return self.name
#---------------------------------------------------
def get_image_filename(instance, filename):
    title = instance.site.name
    slug = slugify(title)
    return "site_images/%s-%s" % (slug, filename)
  


class Images(models.Model):
    site = models.ForeignKey(Site, on_delete=models.CASCADE, default=None)
    image = models.ImageField(upload_to=get_image_filename, verbose_name='Image')
#-------------------------------------------------------
class OpeningHours(models.Model):
    site = models.ForeignKey(Site, on_delete=models.CASCADE, null=True)
    day_of_week = models.IntegerField(choices=(
        (1, 'Monday'),
        (2, 'Tuesday'),
        (3, 'Wednesday'),
        (4, 'Thursday'),
        (5, 'Friday'),
        (6, 'Saturday'),
        (7, 'Sunday'),
    ))
    start_time = models.TimeField()
    end_time = models.TimeField()
    def __str__(self):
        return f"Day {self.day_of_week}"
    


class Transportation(models.Model):
    TRANSPORT_TYPES = (
        ('bus', 'Bus'),
        ('train', 'Train'),
        ('taxi', 'Taxi'),
        ('metro', 'Metro'),
    )

    site = models.ForeignKey(Site, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    details = models.TextField()
    transport_type = models.CharField(max_length=50, choices=TRANSPORT_TYPES)

    def get_transport_details(self):
        # Return the transport details for the pop-up window
        return self.details

    def __str__(self):
        return self.name


class Event(models.Model):
    site = models.ForeignKey(Site, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    def __str__(self):
        return self.name
    def has_already_occurred(self):
        return self.date < date.today()




class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"

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
