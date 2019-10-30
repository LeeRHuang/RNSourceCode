//
//  RNMessageManager.m
//  RNSourceCode
//
//  Created by Lee on 2019/10/29.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNMessageManager.h"

@implementation RNMessageManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(receiveMessage:(NSString *)message) {
  NSLog(@"message is:%@",message);
}


@end
