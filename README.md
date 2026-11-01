# DockFin · Remote Desktop

Fast LAN screen sharing and remote control for Windows 10/11 x64, with an Android viewer.

**Website:** https://rubiya82.github.io/dockfin-release/

**Download:** use the `DockFin-<version>-win-x64.zip` asset (Windows) or `DockFin-<version>-android.apk` (Android) in [Releases](https://github.com/Rubiya82/dockfin-release/releases). GitHub's automatically generated source archives are not the program.

This public repository hosts the product website, release assets, the signed `version.json` / `android/version.json` update manifests, the public update verification key and third-party notices. Application source is maintained privately.

- One EXE (host + viewer), hardware H.264 (NVENC / Quick Sync / AMF) with software fallback.
- Control or view-only access, one-time codes, host approval and remembered devices.
- Multi-monitor selection and text clipboard sync.
- ECDH P-256 + AES-256-GCM encrypted sessions.
- Verified updates: ECDSA P-256 signed manifest, SHA-256 checked package, automatic rollback.

Third-party notices: [JSON for Modern C++](licenses/JSON-LICENSE.txt), [miniz](licenses/MINIZ-LICENSE.txt).
