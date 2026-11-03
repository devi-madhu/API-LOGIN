const{BasePage}=require('./BasePage')

class AccountPage extends BasePage{


    constructor(page){
        super(page)


        this.heading=page.getByRole('heading', { name: 'My account' });
        this.favouriteLink=page.getByRole('link', { name: 'Favorites' });
        this.invoiceLink=page.getByRole('link', { name: 'Invoices' });
        this.messageLink=page.getByRole('link', { name: 'Messages' });
        this.favoriteText=page.getByRole('heading', { name: 'Combination Pliers' });

    
}


async open()
{
    await this.navigate('/account');
}

async clicksOnFavouriteLink(){

    await this.favouriteLink.click();

    await expect(AccountPage.favoriteText).tobeVisible();
}

async clicksOnInvoice(){

    await this.invoiceLink.click();
}
}

 module.exports={AccountPage}