import styles from "./NothingSelectedTodo.module.scss"

export const NothingSelectedTodo = () => {
    return(
        <div>
        <img className={styles.img} src="https://sun6-23.userapi.com/s/v1/ig2/Qbo-Ttn54ocAHCIwqw9H2XheaPzrodXU_m5wRNk1jCLqK7R_WjCFzKnEu4OE-pizb6dTl7Bjqiaf4OC5NlYkzU6T.jpg?quality=95&crop=46,0,546,729&as=32x43,48x64,72x96,108x144,160x214,240x320,360x481,480x641,540x721,546x729&from=bu&cs=546x729" height={500} alt="Картинка кота"/>

        <div className={styles.errorText} >Ничего не выбрано</div>
        </div>
);
}