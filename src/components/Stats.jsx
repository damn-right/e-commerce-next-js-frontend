import "../styles/Stats.css";
const Stats = () => {
  return (
    <div className="stats flex flex-col mx-auto">
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-10">
          <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
            <div className="flex flex-col items-center">
              <h3 className="stat">
                <span>10 +</span>
              </h3>
              <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
              Years On The Market
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="stat">
                <span>$12 m</span>
              </h3>
              <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                Annual Revenue Growth
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="stat">
                <span id="countto3" data-decimal="1">2600 K+</span>
              </h3>
              <p className="ttext-base font-medium leading-7 text-center text-dark-grey-600">
                Global Partners
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="stat">
                <span id="countto4">180000 +</span>
              </h3>
              <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                Daily Website Visitors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
