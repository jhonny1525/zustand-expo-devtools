declare module 'react-json-view-compare' {
  import { CSSProperties } from 'react';

  interface ReactJsonViewCompareProps {
    /**
     * The original/old data to compare
     */
    oldData: any;

    /**
     * The new data to compare against oldData
     */
    newData: any;
  }

  /**
   * A React component for comparing and visualizing differences between two JSON objects
   */
  const ReactJsonViewCompare: React.FC<ReactJsonViewCompareProps>;

  export default ReactJsonViewCompare;
}
