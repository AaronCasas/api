// package: viam.component.posetracker.v1
// file: component/posetracker/v1/pose_tracker.proto

import * as component_posetracker_v1_pose_tracker_pb from "../../../component/posetracker/v1/pose_tracker_pb";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PoseTrackerServiceGetPoses = {
  readonly methodName: string;
  readonly service: typeof PoseTrackerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof component_posetracker_v1_pose_tracker_pb.GetPosesRequest;
  readonly responseType: typeof component_posetracker_v1_pose_tracker_pb.GetPosesResponse;
};

type PoseTrackerServiceDoCommand = {
  readonly methodName: string;
  readonly service: typeof PoseTrackerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof common_v1_common_pb.DoCommandRequest;
  readonly responseType: typeof common_v1_common_pb.DoCommandResponse;
};

export class PoseTrackerService {
  static readonly serviceName: string;
  static readonly GetPoses: PoseTrackerServiceGetPoses;
  static readonly DoCommand: PoseTrackerServiceDoCommand;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class PoseTrackerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPoses(
    requestMessage: component_posetracker_v1_pose_tracker_pb.GetPosesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: component_posetracker_v1_pose_tracker_pb.GetPosesResponse|null) => void
  ): UnaryResponse;
  getPoses(
    requestMessage: component_posetracker_v1_pose_tracker_pb.GetPosesRequest,
    callback: (error: ServiceError|null, responseMessage: component_posetracker_v1_pose_tracker_pb.GetPosesResponse|null) => void
  ): UnaryResponse;
  doCommand(
    requestMessage: common_v1_common_pb.DoCommandRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.DoCommandResponse|null) => void
  ): UnaryResponse;
  doCommand(
    requestMessage: common_v1_common_pb.DoCommandRequest,
    callback: (error: ServiceError|null, responseMessage: common_v1_common_pb.DoCommandResponse|null) => void
  ): UnaryResponse;
}

