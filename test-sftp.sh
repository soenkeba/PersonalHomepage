#!/bin/bash

# SFTP Connection Test Script
# SFTP läuft über SSH (Port 22), daher kann curl nicht verwendet werden

SFTP_SERVER="530540.ssh.w1.strato.hosting"
SFTP_USER="stu512452215"

echo "Testing SFTP connection to $SFTP_SERVER"
echo "Username: $SFTP_USER"
echo ""
echo "Note: curl unterstützt kein SFTP. Wir verwenden stattdessen sftp/ssh"
echo ""

# Test mit sftp Befehl
if command -v sftp &> /dev/null; then
    echo "Testing with sftp command..."
    echo "ls" | sftp -o StrictHostKeyChecking=no -P 22 "$SFTP_USER@$SFTP_SERVER" <<EOF
pwd
ls -la
quit
EOF
else
    echo "sftp command not found"
fi

echo ""
echo "Alternative: Test with ssh (SFTP uses SSH protocol)"
if command -v ssh &> /dev/null; then
    echo "Testing SSH connection (SFTP uses SSH)..."
    ssh -o StrictHostKeyChecking=no -p 22 "$SFTP_USER@$SFTP_SERVER" "pwd && ls -la" 2>&1 | head -20
else
    echo "ssh command not found"
fi

