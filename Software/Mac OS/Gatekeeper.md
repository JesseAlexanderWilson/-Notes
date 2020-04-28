# Gatekeeper

## Disable
```bash
sudo spctl --master-disable
```
Most users should leave Gatekeeper turned on, and if need be, they can bypass it through the System Preference panel on a per-app basis, or by using the right-click “Open” trick.

## Status
```bash
spctl --status
```

## Enable
```bash
sudo spctl --master-enable
```

# Source

https://osxdaily.com/2015/05/04/disable-gatekeeper-command-line-mac-osx/