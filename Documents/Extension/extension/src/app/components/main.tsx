import React from 'react';
import '../globals.css';
import Image from 'next/image';
const Main = () => {
return(<main>
    <div className='leftMain'>
        <div>
            <p>CO2 Removed</p>
            <p><strong>9.99kg</strong></p>
        </div>
        <div>
            <p>Height</p>
            <p><strong>139</strong> cm</p>
        </div>
        <div>
            <p>Age</p>
            <p><strong>239</strong> days</p>
        </div>
    </div>
    <div className="rightMain">
        <div className="img" >
            <Image
            src="/images/DSC_1318 6.png"  
            alt="Description of the image"
            width={107}  
            height={97} 
             layout="responsive" 
             style={{ border: '1px solid white' }}
        />
        </div>
        <div className="img">
            <Image
            src="/images/DSC_1318 6.png"  
            alt="Description of the image"
            width={500}  
            height={300} 
            layout="responsive"
            style={{ border: '1px solid white' }} 
        />
        </div>
        <div className="img">
            <Image
            src="/images/DSC_1318 6.png"  
            alt="Description of the image"
            width={500}  
            height={300} 
            layout="responsive" 
            style={{ border: '1px solid white' }}
        />
        </div>
        <div className="img">
            <Image
            src="/images/DSC_1318 6.png"  
            alt="Description of the image"
            width={500}  
            height={300} 
            layout="responsive" 
            style={{ border: '1px solid white' }}
        />
        </div>
    </div>
</main>);
    
};

export {Main}