import React, { useEffect, useState } from 'react'
import MaterialBox from '../../Components/MaterialBox/MaterialBox'
import MaterialBox2 from '../../Components/MaterialBox/MaterialBox2'
import Header2 from '../../Components/Header/Header2'
import ScrollToTop from '../../UI/ScrollToTop'
import Loader from '../../UI/Loader'
import axios from 'axios'

const Material = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get('https://localhost:44377/api/Student/StudentMaterial')
        .then(response => {
          setData(response.data);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <Loader/>;
    }
    return (
        <div className='bg-[#0060E430] pb-10 mt-16 pt-10'>
            <ScrollToTop />
            <div class=" grid grid-cols-2 mt-2 grid-rows-2 gap-4">
                <Header2 title={'Material'} />
                <MaterialBox text={'First Year (first semester)'} url={data.level1.term1.link} />
                <MaterialBox2 text={'First Year (second semester)'} url={data.level1.term2.link} />
                <MaterialBox text={'Second Year (first semester)'} url={data.level2.term1.link} />
                <MaterialBox2 text={'Second Year (Second semester)'} url={data.level2.term2.link} />
            </div>

            <div class="grid grid-cols-2 mt-11 grid-rows-4 gap-8">
                <Header2 title={'Third year'} />
                <MaterialBox text={'Computer Science  (first semester)'} url={data.level3.term1.cs.link} />
                <MaterialBox2 text={'Computer Science  (second semester)'} url={data.level3.term2.cs.link}/>
                <MaterialBox text={'Information Technology  (first semester)'} url={data.level3.term1.it.link}/>
                <MaterialBox2 text={'Information Technology  (second semester)'} url={data.level3.term2.it.link}/>
                <MaterialBox text={'Information System  (first semester)'} url={data.level3.term1.is.link}/>
                <MaterialBox2 text={'Information System  (second semester)'} url={data.level3.term2.is.link}/>
                <MaterialBox text={'Multi-Media  (first semester)'} url={data.level3.term1.mm.link}/>
                <MaterialBox2 text={'Multi-Media  (second semester)'} url={data.level3.term2.mm.link}/>
            </div>

            <div class="grid grid-cols-2 mt-11 gap-8 mb-0">
                <Header2 title={'Fourth year'} />
                <MaterialBox text={'Computer Science  (first semester)'} url={data.level4.term1.cs.link} />
                <MaterialBox2 text={'Computer Science  (second semester)'} url={data.level4.term2.cs.link}/>
                <MaterialBox text={'Information Technology  (first semester)'} url={data.level4.term1.it.link}/>
                <MaterialBox2 text={'Information Technology  (second semester)'} url={data.level4.term2.it.link}/>
                <MaterialBox text={'Information System  (first semester)'} url={data.level4.term1.is.link}/>
                <MaterialBox2 text={'Information System  (second semester)'} url={data.level4.term2.is.link}/>
                <MaterialBox text={'Multi-Media  (first semester)'} url={data.level4.term1.mm.link}/>
                <MaterialBox2 text={'Multi-Media  (second semester)'} url={data.level4.term2.mm.link}/>
            </div>
        </div>
    )
}

export default Material