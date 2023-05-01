import {
    trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('1', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible',
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
                'max-height': '500px',
            })),
            animate('500ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
]
