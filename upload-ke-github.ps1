# ============================================================
#  SCRIPT UPLOAD PROJECT KE GITHUB - 100% AMAN
#  Versi lama TIDAK akan rusak (dibuat cadangan otomatis)
#  Repo : prabudanling/mutiara-refleksi
#
#  CARA PAKAI:
#  1. Taruh file ini di dalam folder project yang mau diupload
#  2. Klik kanan file ini -> "Run with PowerShell"
#     ATAU buka PowerShell di folder itu lalu jalankan:
#     powershell -ExecutionPolicy Bypass -File .\upload-ke-github.ps1
# ============================================================

# --- Boleh diganti sesuai keinginan ---
$PesanCommit = "Update project terbaru"

# --- Pengaturan otomatis (tidak perlu diubah) ---
$RepoUrl     = "https://github.com/prabudanling/mutiara-refleksi.git"
$FolderBaru  = $PSScriptRoot                                    # folder tempat script ini berada
$FolderKerja = Join-Path (Split-Path $PSScriptRoot -Parent) "mutiara-refleksi-github"

Write-Host ""
Write-Host "========== UPLOAD PROJECT KE GITHUB ==========" -ForegroundColor Yellow
Write-Host "Folder sumber : $FolderBaru"
Write-Host "Folder repo   : $FolderKerja"
Write-Host ""

# --- Cek Git terinstall ---
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "[X] Git belum terinstall. Install dulu dengan perintah:" -ForegroundColor Red
    Write-Host "    winget install --id Git.Git" -ForegroundColor Yellow
    pause; exit 1
}

# --- LANGKAH 1: Ambil repo lama (atau pakai yang sudah ada) ---
if (Test-Path $FolderKerja) {
    Write-Host "[1/5] Folder repo sudah ada, ambil pembaruan terbaru..." -ForegroundColor Cyan
    git -C $FolderKerja pull origin main
} else {
    Write-Host "[1/5] Mengambil repo lama dari GitHub..." -ForegroundColor Cyan
    git clone $RepoUrl $FolderKerja
}
if ($LASTEXITCODE -ne 0) { Write-Host "[X] Gagal mengambil repo. Cek koneksi internet Anda." -ForegroundColor Red; pause; exit 1 }

# --- LANGKAH 2: CADANGAN versi lama (kunci keamanan!) ---
Write-Host "[2/5] Membuat cadangan versi lama -> branch 'backup-versi-lama'..." -ForegroundColor Cyan
git -C $FolderKerja branch backup-versi-lama 2>$null
git -C $FolderKerja push origin backup-versi-lama 2>$null
Write-Host "      Cadangan tersimpan di GitHub (branch: backup-versi-lama)" -ForegroundColor Green

# --- LANGKAH 3: Salin file baru KE ATAS versi lama ---
Write-Host "[3/5] Menyalin file project terbaru ke dalam repo..." -ForegroundColor Cyan
#  /E  = salin semua subfolder (termasuk yang kosong)
#  /XD = JANGAN ikut menyalin folder .git / node_modules / .next
robocopy $FolderBaru $FolderKerja /E /XD .git node_modules .next ".vercel"
if ($LASTEXITCODE -ge 8) { Write-Host "[X] Gagal menyalin file." -ForegroundColor Red; pause; exit 1 }
# Catatan: robocopy TIDAK menghapus file lama, hanya menambah/memperbarui.

# --- LANGKAH 4: Commit ---
Write-Host "[4/5] Menyimpan perubahan (commit)..." -ForegroundColor Cyan
git -C $FolderKerja add .
git -C $FolderKerja commit -m "$PesanCommit"
if ($LASTEXITCODE -ne 0) {
    Write-Host "      Tidak ada perubahan baru yang perlu diupload." -ForegroundColor Yellow
    pause; exit 0
}

# --- LANGKAH 5: Push ke GitHub ---
Write-Host "[5/5] Mengunggah ke GitHub..." -ForegroundColor Cyan
# Jika ditolak karena repo berubah, tarik dulu lalu ulangi push
git -C $FolderKerja push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "      Push ditolak, mencoba tarik dulu lalu upload ulang..." -ForegroundColor Yellow
    git -C $FolderKerja pull origin main --no-rebase
    git -C $FolderKerja push origin main
}
if ($LASTEXITCODE -ne 0) { Write-Host "[X] Push gagal. Coba jalankan script ini sekali lagi." -ForegroundColor Red; pause; exit 1 }

Write-Host ""
Write-Host "=========== SELESAI! UPLOAD BERHASIL ===========" -ForegroundColor Green
Write-Host " Versi baru : aktif di branch 'main'"
Write-Host " Versi lama : AMAN di branch 'backup-versi-lama' (bisa dilihat kapan saja)"
Write-Host " Lihat hasil: https://github.com/prabudanling/mutiara-refleksi"
Write-Host "================================================" -ForegroundColor Green
Write-Host " Catatan: kalau muncul jendela login GitHub saat upload," -ForegroundColor Gray
Write-Host " klik 'Sign in with your browser' -> izinkan." -ForegroundColor Gray
Write-Host ""
pause
