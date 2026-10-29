# 恢复用户指定的三个桌面快捷方式：Steam / DeepSeek Harness Next / 星虹巢编辑器
$ErrorActionPreference = "Stop"
$desktop = [Environment]::GetFolderPath("Desktop")

# Steam：直接复制开始菜单/公共桌面的原快捷方式，保留原图标与参数
$steam = "C:\Users\Public\Desktop\Steam.lnk"
if (-not (Test-Path $steam)) { $steam = "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Steam\Steam.lnk" }
Copy-Item $steam (Join-Path $desktop "Steam.lnk") -Force

# DeepSeek Harness Next：复制开始菜单的 DSH NEXT 快捷方式并改名
$dsh = "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\DSH NEXT.lnk"
Copy-Item $dsh (Join-Path $desktop "DeepSeek Harness Next.lnk") -Force

# 星虹巢编辑器：指向桌面上已有的 星虹巢编辑器.cmd，使用项目里的图标
$shell = New-Object -ComObject WScript.Shell
$s = $shell.CreateShortcut((Join-Path $desktop "星虹巢编辑器.lnk"))
$s.TargetPath = Join-Path $desktop "星虹巢编辑器.cmd"
$s.WorkingDirectory = "D:\Projects\hugo-2010-homepage"
$s.IconLocation = "D:\Projects\hugo-2010-homepage\tools\editor-icon\editor-icon.ico,0"
$s.Description = "星虹巢编辑器"
$s.WindowStyle = 1
$s.Save()

Write-Output "done"
