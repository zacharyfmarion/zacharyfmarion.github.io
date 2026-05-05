export interface Project {
  title: string;
  description: string;
  image?: string;
  links?: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export const projects: Project[] = [
  {
    title: 'Pixel Forecast',
    description: 'An iOS weather app with a retro pixel art aesthetic. Dynamic scenes change with time and weather, powered by Apple WeatherKit.',
    image: '/images/pixel-forecast.png',
    links: [
      { label: 'app', href: 'https://apps.apple.com/us/app/pixel-forecast/id6758243523' },
    ],
  },
  {
    title: 'OpenSCAD Studio',
    description: 'A web and desktop editor for OpenSCAD with live 3D preview and an AI copilot for generating parametric models.',
    image: '/images/openscad-studio.png',
    links: [
      { label: 'source', href: 'https://github.com/zacharyfmarion/openscad-studio' },
      { label: 'website', href: 'https://openscad-studio.pages.dev' },
      { label: 'download', href: 'https://github.com/zacharyfmarion/openscad-studio/releases/latest/download/OpenSCAD.Studio_latest_aarch64.dmg' },
    ],
  },
  {
    title: 'Cascade',
    description: 'A node-based image editor for building reusable processing pipelines on the web and desktop.',
    image: '/images/cascade.png',
    links: [
      { label: 'source', href: 'https://github.com/zacharyfmarion/cascade' },
      { label: 'website', href: 'https://cascade-editor.pages.dev' },
      { label: 'download', href: 'https://github.com/zacharyfmarion/cascade/releases/latest/download/Cascade_latest_aarch64.dmg' },
    ],
  },
  {
    title: 'Pixelate',
    description: 'A browser-based tool for creating pixel art from images with pixelation, dithering, and color palette effects.',
    image: '/images/pixelate.png',
    links: [
      { label: 'source', href: 'https://github.com/zacharyfmarion/pixelate' },
      { label: 'demo', href: 'https://zacharyfmarion.github.io/pixelate' },
    ],
  },
];
