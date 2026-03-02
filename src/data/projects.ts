export interface Project {
  title: string;
  description: string;
  image?: string;
  demoLink?: string;
  sourceLink?: string;
}

export const projects: Project[] = [
  {
    title: 'Pixel Forecast',
    description: 'An iOS weather app with a retro pixel art aesthetic. Dynamic scenes change with time and weather, powered by Apple WeatherKit.',
    image: '/images/pixel-forecast.png',
    demoLink: 'https://apps.apple.com/us/app/pixel-forecast/id6758243523',
  },
  {
    title: 'OpenSCAD Studio',
    description: 'A web and desktop editor for OpenSCAD with live 3D preview and an AI copilot for generating parametric models.',
    image: '/images/openscad-studio.png',
    demoLink: 'https://openscad-studio.pages.dev',
    sourceLink: 'https://github.com/zacharyfmarion/openscad-studio',
  },
  {
    title: 'Pixelate',
    description: 'A browser-based tool for creating pixel art from images with pixelation, dithering, and color palette effects.',
    image: '/images/pixelate.png',
    demoLink: 'https://zacharyfmarion.github.io/pixelate',
    sourceLink: 'https://github.com/zacharyfmarion/pixelate',
  },
];
