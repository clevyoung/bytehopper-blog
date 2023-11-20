import Github from './github.svg';
import Mail from './mail.svg';
import Rss from './rss.svg';

const svgMap = {
  mail: Mail,
  rss: Rss,
  github: Github,
};

interface Props {
  kind: keyof typeof svgMap;
  href?: string;
  size: number;
}

const SocialIcon = (props: Props) => {
  const { href, kind, size = 8 } = props;
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null;

  const SocialSvg = svgMap[kind];

  return (
    <a
      className='text-sm text-gray-500 transition hover:text-gray-600'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      <span className='sr-only'>{kind}</span>
      <SocialSvg
        className={`hover:text-blue-500 dark:hover:text-blue-400 fill-current text-gray-700 dark:text-gray-200`}
        style={{
          width: size,
          height: size,
        }}
      />
    </a>
  );
};

export default SocialIcon;
