import {
    trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('1', style({
            'max-height': '1000px', 'opacity': '1', 'visibility': 'visible',
        })),
        state('0', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden',
        })),
        transition('1 => 0', [group([
            animate('500ms ease-in-out', style({
                'max-height': '0px',
            })),
            animate('500ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('500ms ease-in-out', style({
                'visibility': 'hidden'
            })),
        ]
        )]),
        transition('0 => 1', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('500ms ease-in-out', style({
                'max-height': '1000px',
            })),
            animate('500ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
]


export const ZoomInOutAnimation = [
    // 0% {
    //     opacity: 0;
    //     transform: scale(.8);
    // }

    // 100% {
    //     opacity: 1;
    //     transform: scale(1);
    // }
    trigger('zoomInOut', [
        state('1', style({
            'transform': 'scale(1)', 'opacity': '1', 'visibility': 'visible',
        })),
        state('0', style({
            'transform': 'scale(0.8)', 'opacity': '0', 'visibility': 'hidden',
        })),
        transition('1 => 0', [group([
            animate('500ms ease-in-out', style({
                'transform': 'scale(0.8)',
            })),
            animate('500ms ease-in-out', style({
                'opacity': '0'
            })),
        ]
        )]),
        transition('0 => 1', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('500ms ease-in-out', style({
                'transform': 'scale(1)',
            })),
            animate('500ms ease-in-out', style({
                'opacity': '1'
            })),
            animate('500ms ease-in-out', style({
                'visibility': 'hidden'
            })),
        ]
        )])
    ]),
]
