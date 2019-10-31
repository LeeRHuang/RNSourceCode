//
//  NativeToJSEventEmitter.m
//  RNSourceCode
//
//  Created by Lee on 2019/10/31.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NativeToJSEventEmitter.h"

@implementation NativeToJSEventEmitter
RCT_EXPORT_MODULE();

- (instancetype)init {
  self = [super init];
  if (self) {
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(sendMessageToJS) name:@"NativeToJSEventEmitterNotification" object:nil];
  }
  return self;
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"Hello"];
}

- (void)sendMessageToJS {
  [self sendEventWithName:@"Hello" body:@"From Native Message"];
}

@end
