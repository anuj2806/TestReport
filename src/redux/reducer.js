import {createReducer,createAction} from '@reduxjs/toolkit'

const fundAction = createAction('fundAction');
const collateralAction = createAction('collateralAction');
const partialSellAction = createAction('partialSellAction');
const completedSellAction = createAction('completedSellAction');
const portfolioHealthAction = createAction('portfolioHealthAction');

const portfolioDetail = createReducer(
    {
        fund:[],
        collateral:[],
        partialSell:[],
        completedSell:[],
        portfolioHealth:[],
    },(builder)=>{
        builder
            .addCase(fundAction,(state,action)=>{
                state.fund=action.payload
            })
            .addCase(collateralAction,(state,action)=>{
                state.collateral=action.payload
            })
            .addCase(partialSellAction,(state,action)=>{
                state.partialSell=action.payload
            })
            .addCase(completedSellAction,(state,action)=>{
               state.completedSell=action.payload
            })
            .addCase(portfolioHealthAction,(state,action)=>{
               state.portfolioHealth=action.payload
            })
    })

export default portfolioDetail
