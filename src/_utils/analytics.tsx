interface Props {
    category?: string,
    action?: React.Component | any,
    label? : string,
    value?: any,
}

export const trackEvent = ({ category, action, label, value }: Props) => {
    if (typeof window === 'undefined') {
        return;
    }
    if (
        typeof window.ga === 'undefined' ||
        process.env.NODE_ENV !== 'production'
      ) {
        console.info('`trackEvent` called:', { category, action, label, value });
        return;
      }
    
      window.ga('send', 'event', category, action, label, value);
}

export const trackInteractWithCodeSample = ({ component, label }:{component: any, label: string}) => {
    trackEvent({
      category: 'code-snippet',
      action: component,
      label,
    });
  };
  
  export const trackSignUpForNewsletter = ({ id }: {id: string}) => {
    trackEvent({
      category: 'newsletter',
      label: id,
    });
  };
  
  export const trackFinishedReadingPost = ({ slug }: {slug: string}) => {
    trackEvent({
      category: 'blog-post',
      action: 'read',
      label: slug,
    });
  };