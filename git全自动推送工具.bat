@echo off
git status
git add .
git commit -m "auto-upload"
git pull
git push
echo Succeed!
echo --------End!--------
pause
