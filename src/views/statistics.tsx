import { statistics } from '../util/constants'
import { styles } from '../util/style'

const Statistics = () => {
  return (
    <div className={`${styles.flexStart} ml-5 mt-10 flex-row flex-wrap sm:mb-20 mb-6`}>
      {
        statistics.map((stat, index)=>(
          <div key={index} className={`flex-1 flex justify-start items-center `}>
            <h4 className={`font-montserrat font-semibold xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] text-white`}>{stat.value}</h4>
            <p className={`font-montserrat font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-gradient uppercase ml-3`}>{stat.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Statistics