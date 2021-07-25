import style from '../Dsign/Dsign.module.css'
export default function DonateButton() {
    return (
        <form style={{ 'position': 'absolute', 'right': '2vw' }} action="https://www.paypal.com/donate" method="post" target="_blank">
            <input className={style.donate} type="hidden" name="business" value="dion.patsiouras@gmail.com" />
            <input className={style.donate} type="hidden" name="no_recurring" value="0" />
            <input className={style.donate} type="hidden" name="item_name" value="Thanks for supporting me! More icons coming soon!" />
            <input className={style.donate} type="hidden" name="currency_code" value="EUR" />
            <input className={style.donate} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />

        </form>
    );
}