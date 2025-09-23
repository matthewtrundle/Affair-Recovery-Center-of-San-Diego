// San Diego Color Palette inspired by actual locations
export const sanDiegoTheme = {
  colors: {
    // Ocean colors from La Jolla Cove and Pacific Beach
    ocean: {
      deep: '#0C1B2A',        // Deep Pacific depths
      primary: '#1e40af',     // Classic ocean blue
      bright: '#0ea5e9',      // Bright surf blue
      turquoise: '#06b6d4',   // La Jolla Cove turquoise
      foam: '#e0f2fe',        // White foam and bubbles
    },

    // Sunset colors from Sunset Cliffs and Del Mar
    sunset: {
      golden: '#f59e0b',      // Golden hour light
      coral: '#f97316',       // Coral pink sky
      amber: '#fbbf24',       // Warm amber light
      peach: '#fed7aa',       // Soft peach tones
      salmon: '#fda4af',      // Salmon pink clouds
    },

    // Beach colors from Mission Beach and Coronado
    beach: {
      sand: '#fef3c7',        // Del Mar sand
      driftwood: '#a8a29e',   // Weathered driftwood
      seagrass: '#6b7280',    // Sage green vegetation
      shell: '#f1f5f9',       // Bleached shell white
    },

    // Landscape colors from Balboa Park and Torrey Pines
    landscape: {
      eucalyptus: '#065f46',  // Deep eucalyptus green
      sage: '#6b7280',        // Coastal sage scrub
      sandstone: '#d6d3d1',   // Torrey Pines sandstone
      chaparral: '#78716c',   // Chaparral brown
    },

    // Sky colors throughout the day
    sky: {
      dawn: '#f0f9ff',        // Early morning mist
      day: '#0284c7',         // Clear day sky
      dusk: '#7c3aed',        // Purple twilight
      night: '#1e1b4b',       // Night sky
    }
  },

  gradients: {
    oceanDepth: 'linear-gradient(135deg, #0C1B2A 0%, #1e40af 50%, #06b6d4 100%)',
    goldenHour: 'linear-gradient(45deg, #f59e0b 0%, #f97316 50%, #fbbf24 100%)',
    beachSunset: 'linear-gradient(180deg, #fbbf24 0%, #f97316 50%, #1e40af 100%)',
    mistToSky: 'linear-gradient(180deg, #f0f9ff 0%, #0284c7 100%)',
    deepToSurface: 'linear-gradient(180deg, #0C1B2A 0%, #06b6d4 100%)',
  },

  shadows: {
    oceanGlow: '0 0 30px rgba(6, 182, 212, 0.3)',
    sunsetGlow: '0 0 40px rgba(245, 158, 11, 0.4)',
    depthShadow: '0 20px 60px rgba(12, 27, 42, 0.5)',
    softLight: '0 10px 30px rgba(255, 255, 255, 0.1)',
  },

  animations: {
    wave: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
    },
    tide: {
      duration: 8,
      ease: 'linear',
      repeat: Infinity,
    },
    shimmer: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
    drift: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    }
  }
}

// Location-specific color schemes
export const locations = {
  laJollaCove: {
    primary: sanDiegoTheme.colors.ocean.turquoise,
    secondary: sanDiegoTheme.colors.sunset.golden,
    accent: sanDiegoTheme.colors.beach.sand,
    gradient: sanDiegoTheme.gradients.deepToSurface,
  },

  sunsetCliffs: {
    primary: sanDiegoTheme.colors.sunset.coral,
    secondary: sanDiegoTheme.colors.sunset.golden,
    accent: sanDiegoTheme.colors.ocean.deep,
    gradient: sanDiegoTheme.gradients.beachSunset,
  },

  missionBeach: {
    primary: sanDiegoTheme.colors.beach.sand,
    secondary: sanDiegoTheme.colors.ocean.bright,
    accent: sanDiegoTheme.colors.sunset.peach,
    gradient: sanDiegoTheme.gradients.mistToSky,
  },

  torreyPines: {
    primary: sanDiegoTheme.colors.landscape.sage,
    secondary: sanDiegoTheme.colors.landscape.sandstone,
    accent: sanDiegoTheme.colors.ocean.primary,
    gradient: 'linear-gradient(135deg, #6b7280 0%, #d6d3d1 50%, #1e40af 100%)',
  }
}

// Utility functions for theme application
export const themeUtils = {
  getOceanColor: (depth: number) => {
    const colors = sanDiegoTheme.colors.ocean
    if (depth < 0.3) return colors.foam
    if (depth < 0.6) return colors.turquoise
    if (depth < 0.8) return colors.bright
    return colors.deep
  },

  getSunsetColor: (time: number) => {
    const colors = sanDiegoTheme.colors.sunset
    if (time < 0.2) return colors.golden
    if (time < 0.4) return colors.amber
    if (time < 0.6) return colors.coral
    if (time < 0.8) return colors.peach
    return colors.salmon
  },

  getTimeOfDayColors: (hour: number) => {
    if (hour < 6) return sanDiegoTheme.colors.sky.night
    if (hour < 8) return sanDiegoTheme.colors.sky.dawn
    if (hour < 18) return sanDiegoTheme.colors.sky.day
    if (hour < 20) return sanDiegoTheme.colors.sunset.golden
    return sanDiegoTheme.colors.sky.dusk
  },

  createLocationTheme: (locationName: keyof typeof locations) => {
    return locations[locationName]
  }
}

export default sanDiegoTheme