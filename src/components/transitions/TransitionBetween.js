import {Children, useMemo} from 'react';
import {SwitchTransition, CSSTransition} from 'react-transition-group';

import './TransitionBetween.css';


export default function TransitionBetween({children, show}) {
  const childElement = useMemo(
    () => {
      const byKey = {};
      Children.forEach(children, child => {
        byKey[child.key] = child;
      })

      return byKey[show] || null;
    },
    [children, show]
  );

  return <SwitchTransition mode={'out-in'}>
    <CSSTransition
      key={show}
      addEndListener={(node, done) => {
        node.addEventListener("transitionend", done, false);
      }}
      classNames="fade"
    >
      {childElement}
    </CSSTransition>
  </SwitchTransition>
}

// export default function TransitionBetween({children, show, }) {
//   <TransitionGroup component={null}>
//     <Transition
//       key={key}
//       appear={true}
//       onEnter={enter}
//       onExit={}
//       timeout={{enter: 750, exit: 0}}
//     >
//
//     </Transition>
//   </TransitionGroup>
// }
//
// function enter(node, appears) {
//   //TODO
// }
//
// function exit(node, appears) {
//   //TODO
// }
