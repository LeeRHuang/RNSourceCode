//
//  RNMessageManager.m
//  RNSourceCode
//
//  Created by Lee on 2019/10/29.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNMessageManager.h"
#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface RNMessageManager ()<UIAlertViewDelegate>

@end

@implementation RNMessageManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(receiveMessage:(NSString *)message) {
  NSLog(@"message is:%@",message);
  
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Test" message:@"Native2JS" delegate:self cancelButtonTitle:@"cancel" otherButtonTitles:@"ok", nil];
    [alert show];
  });
}

- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex {
  if (buttonIndex == 1) {
    [[NSNotificationCenter defaultCenter] postNotificationName:@"NativeToJSEventEmitterNotification" object:nil];
  }
}
@end
