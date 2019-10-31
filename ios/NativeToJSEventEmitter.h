//
//  NativeToJSEventEmitter.h
//  RNSourceCode
//
//  Created by Lee on 2019/10/31.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

NS_ASSUME_NONNULL_BEGIN

@interface NativeToJSEventEmitter : RCTEventEmitter<RCTBridgeModule>

@end

NS_ASSUME_NONNULL_END
