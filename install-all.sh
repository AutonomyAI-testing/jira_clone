#!/bin/bash
set -e

# Install and setup PostgreSQL
if ! command -v psql &> /dev/null; then
    echo "Installing PostgreSQL..."
    sudo apt-get update -qq
    sudo apt-get install -y -qq postgresql postgresql-contrib
fi

# Configure PostgreSQL to listen on localhost
sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = 'localhost'/" /etc/postgresql/15/main/postgresql.conf 2>/dev/null || true

# Start PostgreSQL
sudo service postgresql start

# Create user and database
sudo -u postgres psql -tc "SELECT 1 FROM pg_roles WHERE rolname='PostgreSQL'" 2>/dev/null | grep -q 1 || sudo -u postgres psql -c "CREATE USER \"PostgreSQL\" WITH PASSWORD 'PostgreSQL';" 2>/dev/null
sudo -u postgres psql -tc "SELECT 1 FROM pg_database WHERE datname='PostgreSQL'" 2>/dev/null | grep -q 1 || sudo -u postgres psql -c "CREATE DATABASE \"PostgreSQL\" OWNER \"PostgreSQL\";" 2>/dev/null
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE \"PostgreSQL\" TO \"PostgreSQL\";" 2>/dev/null || true

# Install npm dependencies
npm install

# Upgrade pg and typeorm for PostgreSQL 15 compatibility
cd api && npm install pg@8.7.1 typeorm@0.2.45 --save
cd ..

echo "✓ Setup complete!"
