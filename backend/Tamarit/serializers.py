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
    class Meta:
        model = Images
        fields = '__all__'

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
