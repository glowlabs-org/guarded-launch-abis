/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "IERC1271",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1271__factory>;
    getContractFactory(
      name: "IERC5267",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5267__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "SafeERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeERC20__factory>;
    getContractFactory(
      name: "Address",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Address__factory>;
    getContractFactory(
      name: "ECDSA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ECDSA__factory>;
    getContractFactory(
      name: "EIP712",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712__factory>;
    getContractFactory(
      name: "MerkleProof",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleProof__factory>;
    getContractFactory(
      name: "Math",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Math__factory>;
    getContractFactory(
      name: "SafeCast",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeCast__factory>;
    getContractFactory(
      name: "Nonces",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Nonces__factory>;
    getContractFactory(
      name: "ShortStrings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShortStrings__factory>;
    getContractFactory(
      name: "Strings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Strings__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "BatchCommit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BatchCommit__factory>;
    getContractFactory(
      name: "CarbonCreditDescendingPriceAuction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CarbonCreditDescendingPriceAuction__factory>;
    getContractFactory(
      name: "CarbonCreditDutchAuction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CarbonCreditDutchAuction__factory>;
    getContractFactory(
      name: "EarlyLiquidity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EarlyLiquidity__factory>;
    getContractFactory(
      name: "IDecimals",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDecimals__factory>;
    getContractFactory(
      name: "GCC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GCC__factory>;
    getContractFactory(
      name: "VetoCouncilSalaryHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VetoCouncilSalaryHelper__factory>;
    getContractFactory(
      name: "Glow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Glow__factory>;
    getContractFactory(
      name: "GlowUnlocker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GlowUnlocker__factory>;
    getContractFactory(
      name: "Governance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governance__factory>;
    getContractFactory(
      name: "GrantsTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GrantsTreasury__factory>;
    getContractFactory(
      name: "GCCGuardedLaunch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GCCGuardedLaunch__factory>;
    getContractFactory(
      name: "GlowGuardedLaunch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GlowGuardedLaunch__factory>;
    getContractFactory(
      name: "HoldingContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HoldingContract__factory>;
    getContractFactory(
      name: "IHoldingContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHoldingContract__factory>;
    getContractFactory(
      name: "ImpactCatalyst",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ImpactCatalyst__factory>;
    getContractFactory(
      name: "ICarbonCreditAuction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICarbonCreditAuction__factory>;
    getContractFactory(
      name: "IEarlyLiquidity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEarlyLiquidity__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IGCA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGCA__factory>;
    getContractFactory(
      name: "IGCC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGCC__factory>;
    getContractFactory(
      name: "IGlow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGlow__factory>;
    getContractFactory(
      name: "IGovernance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernance__factory>;
    getContractFactory(
      name: "IGrantsTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGrantsTreasury__factory>;
    getContractFactory(
      name: "IMinerPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMinerPool__factory>;
    getContractFactory(
      name: "IUniswapRouterV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapRouterV2__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IVetoCouncil",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVetoCouncil__factory>;
    getContractFactory(
      name: "HalfLife",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HalfLife__factory>;
    getContractFactory(
      name: "HalfLifeCarbonCreditAuction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HalfLifeCarbonCreditAuction__factory>;
    getContractFactory(
      name: "BucketSubmission",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BucketSubmission__factory>;
    getContractFactory(
      name: "GCA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GCA__factory>;
    getContractFactory(
      name: "GCASalaryHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GCASalaryHelper__factory>;
    getContractFactory(
      name: "MinerPoolAndGCA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinerPoolAndGCA__factory>;
    getContractFactory(
      name: "MockGCA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockGCA__factory>;
    getContractFactory(
      name: "MockMinerPoolAndGCA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockMinerPoolAndGCA__factory>;
    getContractFactory(
      name: "MockSalaryHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockSalaryHelper__factory>;
    getContractFactory(
      name: "ISafetyDelay",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISafetyDelay__factory>;
    getContractFactory(
      name: "SafetyDelay",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafetyDelay__factory>;
    getContractFactory(
      name: "GCAPayoutAlgo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GCAPayoutAlgo__factory>;
    getContractFactory(
      name: "GCAPayoutAlgo2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GCAPayoutAlgo2__factory>;
    getContractFactory(
      name: "HalfLife",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HalfLife__factory>;
    getContractFactory(
      name: "MatrixPayout",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MatrixPayout__factory>;
    getContractFactory(
      name: "MD2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MD2__factory>;
    getContractFactory(
      name: "MinerDistributionMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinerDistributionMath__factory>;
    getContractFactory(
      name: "TestBucketMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestBucketMath__factory>;
    getContractFactory(
      name: "EarlyLiquidityMockMinerPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EarlyLiquidityMockMinerPool__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "GoerliGCC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GoerliGCC__factory>;
    getContractFactory(
      name: "GoerliGovernanceQuickPeriod",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GoerliGovernanceQuickPeriod__factory>;
    getContractFactory(
      name: "GoerliMinerPoolAndGCAQuickPeriod",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GoerliMinerPoolAndGCAQuickPeriod__factory>;
    getContractFactory(
      name: "GoerliGCCGuardedLaunch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GoerliGCCGuardedLaunch__factory>;
    getContractFactory(
      name: "GoerliGlowGuardedLaunch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GoerliGlowGuardedLaunch__factory>;
    getContractFactory(
      name: "TestGCCGuardedLaunch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestGCCGuardedLaunch__factory>;
    getContractFactory(
      name: "TestGLOWGuardedLaunch",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestGLOWGuardedLaunch__factory>;
    getContractFactory(
      name: "MockGovernance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockGovernance__factory>;
    getContractFactory(
      name: "MockUSDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockUSDC__factory>;
    getContractFactory(
      name: "MockUSDCTax",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockUSDCTax__factory>;
    getContractFactory(
      name: "TestGCC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestGCC__factory>;
    getContractFactory(
      name: "TestGLOW",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestGLOW__factory>;
    getContractFactory(
      name: "TestUSDG",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestUSDG__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUnifapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUnifapV2Factory__factory>;
    getContractFactory(
      name: "IUnifapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUnifapV2Pair__factory>;
    getContractFactory(
      name: "UQ112x112",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UQ112x112__factory>;
    getContractFactory(
      name: "UnifapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UnifapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Callee__factory>;
    getContractFactory(
      name: "UnifapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UnifapV2Pair__factory>;
    getContractFactory(
      name: "UnifapV2Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UnifapV2Router__factory>;
    getContractFactory(
      name: "WETH9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETH9__factory>;
    getContractFactory(
      name: "USDG",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDG__factory>;
    getContractFactory(
      name: "VetoCouncil",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VetoCouncil__factory>;
    getContractFactory(
      name: "VetoCouncil",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VetoCouncil__factory>;
    getContractFactory(
      name: "VetoCouncilSalaryHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VetoCouncilSalaryHelper__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1155Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "IERC1271",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1271>;
    getContractAt(
      name: "IERC5267",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5267>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "SafeERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeERC20>;
    getContractAt(
      name: "Address",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Address>;
    getContractAt(
      name: "ECDSA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ECDSA>;
    getContractAt(
      name: "EIP712",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712>;
    getContractAt(
      name: "MerkleProof",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleProof>;
    getContractAt(
      name: "Math",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Math>;
    getContractAt(
      name: "SafeCast",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeCast>;
    getContractAt(
      name: "Nonces",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Nonces>;
    getContractAt(
      name: "ShortStrings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShortStrings>;
    getContractAt(
      name: "Strings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Strings>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "BatchCommit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BatchCommit>;
    getContractAt(
      name: "CarbonCreditDescendingPriceAuction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CarbonCreditDescendingPriceAuction>;
    getContractAt(
      name: "CarbonCreditDutchAuction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CarbonCreditDutchAuction>;
    getContractAt(
      name: "EarlyLiquidity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EarlyLiquidity>;
    getContractAt(
      name: "IDecimals",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDecimals>;
    getContractAt(
      name: "GCC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GCC>;
    getContractAt(
      name: "VetoCouncilSalaryHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VetoCouncilSalaryHelper>;
    getContractAt(
      name: "Glow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Glow>;
    getContractAt(
      name: "GlowUnlocker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GlowUnlocker>;
    getContractAt(
      name: "Governance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governance>;
    getContractAt(
      name: "GrantsTreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GrantsTreasury>;
    getContractAt(
      name: "GCCGuardedLaunch",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GCCGuardedLaunch>;
    getContractAt(
      name: "GlowGuardedLaunch",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GlowGuardedLaunch>;
    getContractAt(
      name: "HoldingContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HoldingContract>;
    getContractAt(
      name: "IHoldingContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHoldingContract>;
    getContractAt(
      name: "ImpactCatalyst",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ImpactCatalyst>;
    getContractAt(
      name: "ICarbonCreditAuction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICarbonCreditAuction>;
    getContractAt(
      name: "IEarlyLiquidity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEarlyLiquidity>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IGCA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGCA>;
    getContractAt(
      name: "IGCC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGCC>;
    getContractAt(
      name: "IGlow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGlow>;
    getContractAt(
      name: "IGovernance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernance>;
    getContractAt(
      name: "IGrantsTreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGrantsTreasury>;
    getContractAt(
      name: "IMinerPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMinerPool>;
    getContractAt(
      name: "IUniswapRouterV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapRouterV2>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IVetoCouncil",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVetoCouncil>;
    getContractAt(
      name: "HalfLife",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HalfLife>;
    getContractAt(
      name: "HalfLifeCarbonCreditAuction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HalfLifeCarbonCreditAuction>;
    getContractAt(
      name: "BucketSubmission",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BucketSubmission>;
    getContractAt(
      name: "GCA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GCA>;
    getContractAt(
      name: "GCASalaryHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GCASalaryHelper>;
    getContractAt(
      name: "MinerPoolAndGCA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MinerPoolAndGCA>;
    getContractAt(
      name: "MockGCA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockGCA>;
    getContractAt(
      name: "MockMinerPoolAndGCA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockMinerPoolAndGCA>;
    getContractAt(
      name: "MockSalaryHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockSalaryHelper>;
    getContractAt(
      name: "ISafetyDelay",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISafetyDelay>;
    getContractAt(
      name: "SafetyDelay",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafetyDelay>;
    getContractAt(
      name: "GCAPayoutAlgo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GCAPayoutAlgo>;
    getContractAt(
      name: "GCAPayoutAlgo2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GCAPayoutAlgo2>;
    getContractAt(
      name: "HalfLife",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HalfLife>;
    getContractAt(
      name: "MatrixPayout",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MatrixPayout>;
    getContractAt(
      name: "MD2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MD2>;
    getContractAt(
      name: "MinerDistributionMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MinerDistributionMath>;
    getContractAt(
      name: "TestBucketMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestBucketMath>;
    getContractAt(
      name: "EarlyLiquidityMockMinerPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EarlyLiquidityMockMinerPool>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "GoerliGCC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GoerliGCC>;
    getContractAt(
      name: "GoerliGovernanceQuickPeriod",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GoerliGovernanceQuickPeriod>;
    getContractAt(
      name: "GoerliMinerPoolAndGCAQuickPeriod",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GoerliMinerPoolAndGCAQuickPeriod>;
    getContractAt(
      name: "GoerliGCCGuardedLaunch",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GoerliGCCGuardedLaunch>;
    getContractAt(
      name: "GoerliGlowGuardedLaunch",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GoerliGlowGuardedLaunch>;
    getContractAt(
      name: "TestGCCGuardedLaunch",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestGCCGuardedLaunch>;
    getContractAt(
      name: "TestGLOWGuardedLaunch",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestGLOWGuardedLaunch>;
    getContractAt(
      name: "MockGovernance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockGovernance>;
    getContractAt(
      name: "MockUSDC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockUSDC>;
    getContractAt(
      name: "MockUSDCTax",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockUSDCTax>;
    getContractAt(
      name: "TestGCC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestGCC>;
    getContractAt(
      name: "TestGLOW",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestGLOW>;
    getContractAt(
      name: "TestUSDG",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestUSDG>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUnifapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUnifapV2Factory>;
    getContractAt(
      name: "IUnifapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUnifapV2Pair>;
    getContractAt(
      name: "UQ112x112",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UQ112x112>;
    getContractAt(
      name: "UnifapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UnifapV2Factory>;
    getContractAt(
      name: "IUniswapV2Callee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Callee>;
    getContractAt(
      name: "UnifapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UnifapV2Pair>;
    getContractAt(
      name: "UnifapV2Router",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UnifapV2Router>;
    getContractAt(
      name: "WETH9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETH9>;
    getContractAt(
      name: "USDG",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDG>;
    getContractAt(
      name: "VetoCouncil",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VetoCouncil>;
    getContractAt(
      name: "VetoCouncil",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VetoCouncil>;
    getContractAt(
      name: "VetoCouncilSalaryHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VetoCouncilSalaryHelper>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
