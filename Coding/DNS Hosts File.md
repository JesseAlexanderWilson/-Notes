```
sudo nano /private/etc/hosts
```
```
69.167.152.198 domain.com www.domain.com
```
- `control+o` to save
- `Enter` to overwrite
- `control+x` to exit

Flush DNS cache
```
dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```