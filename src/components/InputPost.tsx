import React from 'react';
import styles from '../styles/components/InputPost.module.css'

interface InputPostProps {

}

const InputPost: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerInput}>
                <textarea className={styles.input} rows={5} placeholder='Escreva sua cantada aqui' />
            </div>
            <div className={styles.footer}>
                <input placeholder='Nome ou usuário(opcional)' />
                <button type="submit" onClick={() => alert("Cliquei")}>Postar</button>
            </div>
        </div>
    );
}

export default InputPost;