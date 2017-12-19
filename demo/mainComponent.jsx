import React from 'react';
import AdSense from '../lib/index';

const MainComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h1> react-adsense: adsense for react </h1>
        <p>
          Project <a href="https://github.com/hustcc/react-adsense">react-adsense</a> is a React-component for Google AdSense / Baidu advertisement.
        </p>

        <h2> 1. Install </h2>
        <pre className="strong"> npm install react-adsense </pre>

        <p> Then import it. </p>
        <pre>{"//import library use script tag.\n\nimport AdSense from 'react-adsense';"}
        </pre>

        <h2> 2. Usage </h2>
        <pre>{"import AdSense from 'react-adsense';\n\n<AdSense.Google client='ca-pub-7292810486004926'\n\t\tslot='7806394673' />"}

        </pre>

        <h2> 3. Demo default </h2>
        <AdSense.Google client='ca-pub-7292810486004926'
                        slot='7806394673' />

        
                
        <h2> 4. In-Feed Ads</h2>
        <AdSense.Google 
          client='ca-pub-8999025630731964'
          slot='8312488574'
          format='fluid'
          layoutKey='-8h+1u-dq+eb+ga'
          style={{ display: 'block', width: 300 }}
        />

        <h2> 5. full-config Demo </h2>
        <AdSense.Google client='ca-pub-7292810486004926'
                        slot='7806394673'
                        style={{width: 500, height: 300, float: 'left'}}
                        format='' />
        <AdSense.Google client='ca-pub-7292810486004926'
                        slot='7806394673'
                        style={{width: 500, height: 300, float: 'left'}}
                        format='' />

      </div>
    );
  }
});

export default MainComponent;