



import {useState, useCallback, useEffect, useRef} from 'react';


//The hook
export default function useElementSize() {
  const [dimensions, setDimensions] = useState({});

  //keep track of props in ref so we can avoid creating new functions constantly
  const ref = useRef({
    dimensions,
    setDimensions,
    node: null,
    observer: null
  });

  //Ensure that ref is up to date
  ref.current.dimensions = dimensions;
  ref.current.setDimensions = setDimensions;

  //initialise the observer
  if(ref.current.observer === null) {
    ref.current.observer = new ResizeObserver((entries, observer) => {
      //debugger;
      //console.log(entries);
      if(entries[0]) {
        const rect = entries[0].target.getBoundingClientRect();

        ref.current.setDimensions({width: rect.width, height: rect.height})
      }
    });
  }

  //Monitor the node ref, and set the observer as required
  const setNodeCallback = useCallback(node => {
    //debugger;
    if(node !== ref.current.node) {
      const {observer, node: curNode} = ref.current;

      if(curNode) {
        observer.unobserve(curNode)
      }

      if(node) {
        observer.observe(node);
      }

      //record the node
      ref.current.node = node;
    }
  }, []);

  //on unmount, stop listening to events & tidy up
  useEffect(() => {
    return () => {
      //debugger;
      ref.current.observer.disconnect();
      ref.current.observer = null;
      ref.current.node = null;
    }
  }, []);

  return [setNodeCallback, dimensions, ref.current.node];
}



//Legacy implementation
// // import {useState, useCallback, useEffect, useRef} from 'react';
// import {shallowEqual} from 'react-redux';
//
//
// //The hook
// export default function useElementSize() {
//   const [dimensions, setDimensions] = useState({});
//
//   //keep track of props in ref so we can avoid creating new functions constantly
//   const ref = useRef({
//     updateActive: false,
//     isMounted: true,
//     dimensions,
//     setDimensions,
//     node: null
//   });
//
//   ref.current.dimensions = dimensions;
//   ref.current.setDimensions = setDimensions;
//
//   const updateDimensions = useCallback(() => {
//     //console.log('updte dimensions');
//     if(!ref.current.isMounted) {
//       return;//stop loop once component is unmounted
//     }
//
//     const node = ref.current.node;
//
//     if(node) {//keep refreshing
//       const dimensions = getDimensionObject(node);
// //console.log(dimensions);
//       //If dimensions have changed record and trigger an update
//       if(ref.current.dimensions !== dimensions && !shallowEqual(ref.current.dimensions, dimensions)) {
//         ref.current.setDimensions(dimensions);
//       }
//
//       window.requestAnimationFrame(updateDimensions);
//     } else {//no node element...
//       //...record that update loop has finished...
//       ref.current.updateActive = false;
//       //...and clear dimensions.
//       ref.current.setDimensions(null);
//     }
//   }, []);
//
//   const setNodeCallback = useCallback(node => {
//     ref.current.node = node
//
//     if(node) {//we have a node
//       if(!ref.current.updateActive) {//update loop is not active
//         updateDimensions();//begin the update loop
//       }
//     }
//   }, []);
//
//   //on unmount, record that component is unmounted
//   useEffect(() => {
//     return () => {
//       ref.current.isMounted = false;
//     }
//   }, []);
//
//   return [setNodeCallback, dimensions, ref.current.node];
// }
//
// function getDimensionObject(node) {
//   const rect = node.getBoundingClientRect();
//
//   return {
//     width: rect.width,
//     height: rect.height,
//     top: "x" in rect ? rect.x : rect.top,
//     left: "y" in rect ? rect.y : rect.left,
//     x: "x" in rect ? rect.x : rect.left,
//     y: "y" in rect ? rect.y : rect.top,
//     right: rect.right,
//     bottom: rect.bottom
//   };
// }
