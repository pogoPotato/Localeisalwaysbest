@echo off
REM Thin wrapper so "deploy" / "./deploy" works without typing the .ps1 extension
REM or fighting PowerShell's execution policy.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy.ps1" %*
