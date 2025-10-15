import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export const SectionContainer = ({ id, children, className, containerClassName }: SectionContainerProps) => {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </section>
  );
};
