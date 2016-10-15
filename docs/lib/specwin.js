import { details, summary, iframe } from './htmlmodule';

export const specwin = () =>
    details({
        id : 'specwin',
        className : 'sitedetails',
        children : [
            summary('Spec suite'),
            iframe({
                src : 'spec.html',
                width: '100%',
                height: '600px'
            })
        ]
    });
