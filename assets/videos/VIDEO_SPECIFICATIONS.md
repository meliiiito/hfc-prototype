# Video Specifications

## Hero Section Video

Place the hero video in this directory (`assets/videos/`).

### hero-video.mp4 & hero-video.webm

**Required Formats:**
- MP4 (H.264 codec) - Primary format for broad compatibility
- WebM (VP9 codec) - Optional but recommended for better compression

**Specifications:**
- **Dimensions:** 1280×720px or 1920×1080px (16:9 ratio)
- **Duration:** 10-30 seconds (looping)
- **Frame Rate:** 30fps
- **Bitrate:** 3-5 Mbps (balance quality and file size)
- **Audio:** None (muted video)
- **File Size:** 
  - MP4: < 5MB
  - WebM: < 3MB

**Content Ideas:**
- Motorized shades opening/closing smoothly
- Smart home app controlling shades
- Different lighting scenarios throughout the day
- Various room settings with motorized shades
- Close-up of shade mechanisms in action

### hero-poster.jpg

**Poster Image (thumbnail shown before video loads):**
- **Dimensions:** 1280×720px (same as video)
- **Format:** JPG or WebP
- **File Size:** < 200KB
- **Description:** First frame or representative shot from the video

---

## Video Features

The hero video includes:

✅ **Autoplay** - Starts automatically on page load  
✅ **Muted** - No audio (required for autoplay)  
✅ **Loop** - Continuously plays  
✅ **Playsinline** - Plays inline on mobile (iOS)  
✅ **Poster** - Shows image while loading  
✅ **Fallback** - Static image for unsupported browsers  

---

## Optimization Tips

### Compress Videos
Use these tools to optimize:
- **HandBrake** (free, cross-platform)
- **FFmpeg** (command-line)
- **CloudConvert** (online converter)

### FFmpeg Example Commands

**Create MP4:**
```bash
ffmpeg -i input.mov -c:v libx264 -preset slow -crf 23 \
  -vf scale=1280:720 -an -movflags +faststart hero-video.mp4
```

**Create WebM:**
```bash
ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 2M \
  -vf scale=1280:720 -an hero-video.webm
```

**Extract Poster Frame:**
```bash
ffmpeg -i hero-video.mp4 -ss 00:00:00 -vframes 1 hero-poster.jpg
```

---

## Browser Support

### Video Formats
- **MP4 (H.264):** All modern browsers, iOS, Android
- **WebM (VP9):** Chrome, Firefox, Edge (smaller file size)

### Fallback Behavior
If video is not supported, the fallback `<img>` will display instead.

---

## Performance Considerations

### Best Practices
1. **Keep file size small** (< 5MB) for fast loading
2. **Use poster image** to show content immediately
3. **Compress heavily** - videos are large files
4. **Consider lazy loading** if below the fold
5. **Test on mobile** - cellular data concerns

### Current Implementation
- Video autoplays on page load
- Muted for autoplay policy compliance
- Loops continuously
- No controls shown (seamless background effect)
- Responsive sizing

---

## Accessibility

The video includes:
- `aria-label` describing the content
- Poster image for context
- No audio (avoid distraction)
- No flashing or strobing content
- Fallback image for all scenarios

---

## Testing Checklist

Before deploying:

- [ ] Test MP4 plays in all browsers
- [ ] Verify WebM plays in Chrome/Firefox
- [ ] Check poster image displays while loading
- [ ] Test autoplay works (must be muted)
- [ ] Verify video loops smoothly
- [ ] Test on mobile devices (iOS Safari, Chrome)
- [ ] Check fallback image displays if video fails
- [ ] Verify file sizes are optimized
- [ ] Test with slow network connection
- [ ] Check video doesn't cause layout shift

---

**Current Status:**
- [ ] hero-video.mp4 (required)
- [ ] hero-video.webm (optional but recommended)
- [ ] hero-poster.jpg (required)

Add these files to enable the hero video!

