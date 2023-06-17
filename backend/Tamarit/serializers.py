from rest_framework import serializers
from .models import *

#--------------------------- Site 
class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = '__all__'
class TransportationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transportation
        fields = '__all__'

class OpeningHoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = OpeningHours
        fields = '__all__'

class ImagesSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        return obj.image.url

    class Meta:
        model = Images
        fields = ['image']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class SiteDetailsSerializer(serializers.ModelSerializer):
    opening_hours = OpeningHoursSerializer(many=True, read_only=True, source='openinghours_set')
    transportation = TransportationSerializer(many=True, read_only=True, source='transportation_set')
    images = ImagesSerializer(many=True, read_only=True, source='images_set')
    event = EventSerializer(many=True, read_only=True, source='event_set')

    class Meta:
        model = Site
        fields = '__all__'

#---------------------------------
class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Comment
        fields = ['user', 'site', 'text', 'created_at']


class FavoriteSerializer(serializers.ModelSerializer):
    site = SiteSerializer()

    class Meta:
        model = Favorite
        fields = ['site']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ['__all__']

