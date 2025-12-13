#!/bin/bash

# FTP Connection Test Script
# This script tests the FTP connection to Strato

FTP_SERVER="ftp.strato.de"
FTP_USER="soenkebartling.de"

echo "Testing FTP connection to $FTP_SERVER"
echo "Username: $FTP_USER"
echo ""

# Prompt for password (won't show on screen)
read -sp "Enter FTP password: " FTP_PASS
echo ""

# Test connection using curl
echo "Testing connection..."
curl -v --ftp-ssl --user "$FTP_USER:$FTP_PASS" "ftp://$FTP_SERVER/" 2>&1 | head -20

# Test with ftp command if available
if command -v ftp &> /dev/null; then
    echo ""
    echo "Testing with ftp command..."
    echo "ls" | ftp -v -n $FTP_SERVER <<EOF
user $FTP_USER $FTP_PASS
pwd
quit
EOF
fi

