import { cn } from '@utils/cn';
import { Icon, IconName } from './ui/icon';

export function SocialLink({
	name,
	src,
	className = '',
}: Readonly<{ name: IconName; src: string; className?: string }>) {
	return (
		<a
			href={src}
			rel="noreferrer"
			target="_blank"
			className="transition hover:opacity-75"
		>
			<span className="sr-only uppercase">{name}</span>
			<Icon name={name} className={cn('h-6 w-6', className)} />
		</a>
	);
}
