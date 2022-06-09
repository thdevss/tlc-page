<template>
    <b-overlay :show="chkLoading" rounded="sm">

        <b-row>
            <b-col cols="12" style="margin:0 auto;max-width: 60%;">
                <div>
                    <b-form-select placeholder="xxxxxx" v-model="selectedDate" :options="lottoDates" class="mb-3" value-field="key" text-field="val" disabled-field="notEnabled"></b-form-select>
                </div>
            </b-col>
            <b-col cols="12" style="padding-top:2%;margin:0 auto;max-width: 60%;">
                <div>
                    <input v-model="chkNumber" type="text" pattern="[0-9]*" minlength="6" maxlength="6" placeholder="ใส่เลขสลากฯ 6 ตัว" class="form-control form-control-lg">
                </div>
            </b-col>

            <b-col cols="12" style="padding-top:2%;margin:0 auto;max-width: 60%;">
                <b-button @click="chkPrize()" variant="outline-primary" style="width: 50%;">ตรวจรางวัล</b-button>

            </b-col>
            
            <b-col cols="12" style="padding-top:2%;margin:0 auto;max-width: 80%; font-size:16px;">
                <b-alert v-model="showHasPrizeAlert" variant="success" dismissible show>
                    {{chkNumberLock}} -- ยินดีด้วย คุณถูกรางวัล{{resultTxt.message}} รับเงินรางวัล {{resultTxt.prize}} บาท
                </b-alert>
                
                <b-alert v-model="showNoPrizeAlert" variant="danger" dismissible show>
                    {{chkNumberLock}} -- เสียใจด้วยจริง ๆ คุณไม่ถูกรางวัลในงวดนี้
                </b-alert>

            </b-col>
        </b-row>

    </b-overlay>
    
</template>

<script>
import { HTTP } from '@/axios.js';

export default {
    name: 'CheckNumber',
    data() {
        return {
            chkLoading: false,
            showHasPrizeAlert: false,
            showNoPrizeAlert: false,
            lottoDates: [
                { key: null, val: 'Please select date.' },
            ],
            selectedDate: null,
            chkNumber: null,
            chkNumberLock: null,
            resultTxt: {}
        }
    },
    mounted () {
       this.getLottoDates();
    },
    methods: {
        async getLottoDates() {
            await HTTP.get(`/`).then(res => {
                if(res.data.data.length > 0) {
                    this.lottoDates = this.lottoDates.concat(res.data.data)
                }
            })
        },
        async chkPrize() {
            this.showHasPrizeAlert = false;
            this.showNoPrizeAlert = false;  
            this.chkNumberLock = this.chkNumber
            this.chkLoading = true;

            await HTTP.get(`/${this.selectedDate}/${this.chkNumber}`).then(res => {
                this.chkLoading = false;

                if(!res.data.status) {
                    alert(res.data.message)
                } else {
                    if(res.data.data.result.hasPrize == true) {
                        // hasPrize
                        this.showHasPrizeAlert = true;  
                        this.resultTxt = res.data.data.result.resultTxt
                    } else {   
                        // not.
                        this.showNoPrizeAlert = true;  
                        
                    }
                }
                
            })
        },
        // async chkPrize() {
        //     this.showHasPrizeAlert = false;

        //     setTimeout(() => {
        //         this.showHasPrizeAlert = true;  
        //     }, 2000);
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
