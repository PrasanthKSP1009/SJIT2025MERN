import { Suspense, lazy } from "react";
const LazyComp = lazy(()=>import ("../Signup.jsx"))
const LazyLoadingAndSuspense = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <h1>This is Lazy Component.</h1>
        <LazyComp />
      </Suspense>
    </div>
  );
};
export default LazyLoadingAndSuspense;
