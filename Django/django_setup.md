# Django Project Setup Guide

This guide walks you through setting up a Django project from scratch.

---

## 1. Prerequisites
Make sure you have the following installed:
- **Python 3.9+**
- **pip** (Python package manager)
- **virtualenv** (recommended for isolated environments)

Check installation:
```bash
python --version
pip --version
```

---

## 2. Create and Activate a Virtual Environment
```bash
# Create a virtual environment
python -m venv venv

# Activate the environment
# On macOS/Linux
source venv/bin/activate

# On Windows
source venv/Scripts/activate
```

---

## 3. Install Django
```bash
pip install django
```

Verify installation:
```bash
django-admin --version
```

---

## 4. Start a New Django Project
```bash
django-admin startproject myproject
cd myproject
```

Run development server:
```bash
python manage.py runserver
```
Visit: `http://127.0.0.1:8000/`

---

## 5. Create a Django App
```bash
python manage.py startapp myapp
```

Add the app to `INSTALLED_APPS` in `myproject/settings.py`:
```python
INSTALLED_APPS = [
    ...
    'myapp',
]
```

---

## 6. Database Migrations
```bash
# Create tables
python manage.py migrate

# Make migrations for your app
python manage.py makemigrations myapp

# Apply migrations
python manage.py migrate
```

---

## 7. Create a Superuser (Admin)
```bash
python manage.py createsuperuser
```

Access the admin site:  
`http://127.0.0.1:8000/admin/`

---

## 8. Useful Commands
- Runserver:
  ```bash
  python manage.py runserver
  ```
- Create new app:
  ```bash
  python manage.py startapp <app_name>
  ```
- Check for issues:
  ```bash
  python manage.py check
  ```

---

## 9. Requirements File
To freeze dependencies:
```bash
pip freeze > requirements.txt
```

To install dependencies later:
```bash
pip install -r requirements.txt
```

---

## 10. Deployment Notes
- Use **Gunicorn / uWSGI** + **Nginx** in production.
- Use **`.env` files** (via `django-environ`) for secrets and database configs.
- Run:
  ```bash
  python manage.py collectstatic
  ```

---

✅ You now have a working Django setup!
