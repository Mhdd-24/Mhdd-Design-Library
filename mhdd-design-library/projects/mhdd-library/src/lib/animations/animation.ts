import { trigger, state, style, transition, animate } from '@angular/animations';

export const expandCollapseStaticHeightAnimation = trigger('expandCollapse', [
    state('expanded', style({ height: '*' })),
    state('collapsed', style({ height: '38px' })),
    transition('expanded <=> collapsed', animate('500ms cubic-bezier(0.4, 0, 0.2, 1)'))
]);

export const popoutAnimation = trigger('popout', [
    state('inactive', style({ transform: 'scale(.85)' })),
    state('active', style({ transform: 'scale(1)' })),
    transition('inactive <=> active', animate('500ms ease-in-out'))
]);

export const expandCollapseAnimation = trigger('expandCollapse', [
    state('collapsed', style({ height: '0px', minHeight: '0', opacity: '0', padding: '0' })),
    state('expanded', style({ height: '*', opacity: '1' })),
    transition('expanded <=> collapsed', animate('300ms ease-in-out'))
]);

export const slideInOutAnimation = trigger('slideInOut', [
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
    ])
]);

export default {
    expandCollapseStaticHeightAnimation,
    popoutAnimation,
    expandCollapseAnimation,
    slideInOutAnimation
};
