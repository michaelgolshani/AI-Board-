from flask import Blueprint, render_template
from app.models import User, Team, Ticket

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return "Welcome to the Help Desk App!"

# Add more routes as needed
