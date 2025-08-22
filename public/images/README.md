# Background Images for Hero Section

## How to Add Your Own Background Image

1. **Add your image** to this `/public/images/` folder
2. **Rename your image** to `hero-bg.jpg` (or update the filename in the hero-section.tsx file)
3. **Supported formats**: JPG, PNG, WebP
4. **Recommended size**: 1920x1080 or higher for best quality

## Image Guidelines

- **High resolution**: Use at least 1920x1080 for crisp display
- **Aspect ratio**: 16:9 works best for full-screen coverage  
- **File size**: Keep under 2MB for fast loading
- **Style**: Choose images that work well with text overlay

## Current Background Options

Your portfolio now includes 4 different background styles that auto-cycle every 15 seconds:

1. **Gradient Waves** - Dynamic animated gradients with moving waves
2. **Geometric Patterns** - Animated dots and hexagonal patterns  
3. **Particle Field** - Floating particles with glow effects
4. **Custom Image** - Your personal background image with animated overlays

## Customization

You can manually switch between backgrounds using the small control buttons in the top-right corner of the hero section.

To modify the auto-cycle timing, edit the `15000` value in the hero-section.tsx file (value is in milliseconds).
