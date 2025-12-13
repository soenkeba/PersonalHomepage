#!/usr/bin/env python3
"""
FTP Connection Test Script for Strato
This script tests the FTP connection without storing the password
"""

import ftplib
import getpass
import sys

FTP_SERVER = "ftp.strato.de"
FTP_USER = "soenkebartling.de"

def test_ftp_connection():
    """Test FTP connection to Strato server"""
    try:
        # Get password securely
        password = getpass.getpass(f"Enter FTP password for {FTP_USER}: ")
        
        print(f"\nConnecting to {FTP_SERVER}...")
        ftp = ftplib.FTP(FTP_SERVER)
        
        print(f"Logging in as {FTP_USER}...")
        ftp.login(FTP_USER, password)
        
        print("✓ Connection successful!")
        print(f"Current directory: {ftp.pwd()}")
        
        print("\nListing files in root directory:")
        files = ftp.nlst()
        for file in files[:10]:  # Show first 10 files
            print(f"  - {file}")
        if len(files) > 10:
            print(f"  ... and {len(files) - 10} more files")
        
        print("\n✓ FTP connection test PASSED")
        ftp.quit()
        return True
        
    except ftplib.error_perm as e:
        print(f"✗ Authentication failed: {e}")
        return False
    except ftplib.error_temp as e:
        print(f"✗ Temporary error: {e}")
        return False
    except Exception as e:
        print(f"✗ Connection failed: {e}")
        return False

if __name__ == "__main__":
    success = test_ftp_connection()
    sys.exit(0 if success else 1)

